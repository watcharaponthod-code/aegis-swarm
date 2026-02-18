# Aegis Memory Interface - Context Persistence

import os
import json

class AegisMemory:
    def __init__(self, agent_id, base_path="./memory_store"):
        self.agent_id = agent_id
        self.store_path = os.path.join(base_path, f"{agent_id}_memory.json")
        os.makedirs(base_path, exist_ok=True)

    def save_context(self, key, value):
        data = self._load_all()
        data[key] = {
            "value": value,
            "updated_at": os.path.getmtime(self.store_path) if os.path.exists(self.store_path) else None
        }
        with open(self.store_path, 'w') as f:
            json.dump(data, f, indent=2)

    def recall_context(self, key):
        data = self._load_all()
        return data.get(key, {}).get("value")

    def _load_all(self):
        if not os.path.exists(self.store_path):
            return {}
        with open(self.store_path, 'r') as f:
            return json.load(f)

if __name__ == "__main__":
    mem = AegisMemory("Guardian-1")
    mem.save_context("last_error", "None")
    print(f"Recalled: {mem.recall_context('last_error')}")

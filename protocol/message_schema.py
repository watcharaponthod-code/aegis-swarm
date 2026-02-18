# Aegis Protocol - Message Schema & Handshake

import json
import hashlib
import time

class AegisMessage:
    def __init__(self, sender_id, receiver_id, payload):
        self.header = {
            "version": "1.0.0",
            "sender": sender_id,
            "receiver": receiver_id,
            "timestamp": time.time(),
            "nonce": hashlib.sha256(str(time.time()).encode()).hexdigest()[:8]
        }
        self.payload = payload
        self.signature = self._generate_audit_hash()

    def _generate_audit_hash(self):
        # Deterministic hash for on-chain audit trail
        content = json.dumps({"header": self.header, "payload": self.payload}, sort_keys=True)
        return hashlib.sha256(content.encode()).hexdigest()

    def to_json(self):
        return json.dumps({
            "header": self.header,
            "payload": self.payload,
            "signature": self.signature
        }, indent=2)

if __name__ == "__main__":
    msg = AegisMessage("Analyst-1", "Guardian-1", {"action": "ANALYZE", "target": "SOL/USDC"})
    print(msg.to_json())

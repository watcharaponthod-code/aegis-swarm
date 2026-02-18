use anchor_lang::prelude::*;

declare_id!("Aegis11111111111111111111111111111111111111");

#[program]
pub mod aegis_protocol {
    use super::*;

    pub fn initialize_agent(ctx: Context<InitializeAgent>, name: String) -> Result<()> {
        let agent_account = &mut ctx.accounts.agent_account;
        agent_account.name = name;
        agent_account.reputation = 100; // Base reputation
        agent_account.owner = *ctx.accounts.owner.key;
        Ok(())
    }

    pub fn log_action(ctx: Context<LogAction>, action_hash: String) -> Result<()> {
        let agent_account = &mut ctx.accounts.agent_account;
        // Logic to log hash on-chain for auditability
        msg!("Aegis Agent {} logged action: {}", agent_account.name, action_hash);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeAgent<'info> {
    #[account(init, payer = owner, space = 8 + 32 + 32 + 8)]
    pub agent_account: Account<'info, AgentAccount>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct LogAction<'info> {
    #[account(mut)]
    pub agent_account: Account<'info, AgentAccount>,
}

#[account]
pub struct AgentAccount {
    pub owner: Pubkey,
    pub name: String,
    pub reputation: u64,
}

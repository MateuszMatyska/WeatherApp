export const actionGenerator = (name) => {
    return {
        handler: `${name}.HANDLER`,
        pending: `${name}.PENDING`,
        resolved: `${name}.RESOLVED`,
        rejected: `${name}.REJECED`
    }
}
export function StatusManager(status) {
    switch (status) {
        case 'paused':
            return "table-warning"
        case 'playing':
            return "table-success"
        case 'standby':
            return "table-danger"
        case 'unreleased':
            return "table-secondary"
        default:
            return ""
    }
}

export default StatusManager;

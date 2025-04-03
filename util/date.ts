export const getLastUpdateTime = (lastUpdated: string) => {
    // Get current time
    const now = new Date();

    // Calculate time difference in hours
    const diffHours = Math.floor((now.getTime() - new Date(lastUpdated).getTime()) / (1000 * 60 * 60));

    if (diffHours < 24) {
        return `${diffHours}h ago`;
    } else {
        const diffDays = Math.floor(diffHours / 24);
        return `${diffDays}d ago`;
    }
};


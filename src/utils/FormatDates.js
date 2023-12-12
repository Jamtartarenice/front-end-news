function formatDate(date) {
    const options = {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    const correctedDate = new Date(date);
    return correctedDate.toLocaleString("en-GB", options);
}

export default formatDate;
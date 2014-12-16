/**
 * Helper *
 */

// Convert time from unix timestamp into string with lll format
UI.registerHelper("formatFullDate", function(timestamp) {
    if (_.isUndefined(timestamp) || _.isNull(timestamp)) {
        return null;
    }
    return moment.unix(timestamp).format('lll')
});
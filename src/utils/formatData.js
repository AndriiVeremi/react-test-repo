const { format, formatDistance } = require("date-fns");

export const formatData = (data) => {
    return format(new Date(data), 'dd MMMM yyyy, HH:mm')
}

export const formatTime = (start, end) => {
    return formatDistance(new Date(start), new Date(end))
}
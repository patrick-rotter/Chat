const useTimeParts = (timestamp: Date) => {
  return {
    day: timestamp.getDay(),
    monthAsText: timestamp.toLocaleString('default', { month: 'short' }),
    monthAsNumber: timestamp.getMonth(),
    year: timestamp.getFullYear(),
    hour: timestamp.getHours(),
    min: timestamp.getMinutes()
  }
}

export default useTimeParts

export default function dateFilter(value, format='date'){
    //console.log(value)
    const options={}
    if (format.includes('date')){
        options.day='2-digit'
        options.mouth='long'
        options.year='numeric'
    }
    if (format.includes('time')){
        options.hour='2-digit'
        options.minute='2-digit'
        options.seconds='2-digit'
    }
    return new Intl.DateTimeFormat('ru-Ru',options).format(new Date(value))
}

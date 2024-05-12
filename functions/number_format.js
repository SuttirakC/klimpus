export default function numberFormat(number){
    return Intl.NumberFormat('th-TH', { maximumSignificantDigits: 10 }).format(number);
}

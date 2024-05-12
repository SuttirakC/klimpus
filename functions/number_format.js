export default function numberFormat(number){
    return Intl.NumberFormat('th-TH', { maximumSignificantDigits: 2 }).format(number);
}

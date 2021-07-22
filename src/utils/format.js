export default function formatCurrency(num) {
    return Number("تومان"+ num.toFixed(2)).toLocaleString() + " ";
}

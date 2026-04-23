export function roundToPrecision(value: number, decimals = 2) {
    return Number(value.toFixed(decimals));
}

export function formatPercent(value: number) {
    return `${percentFormatter.format(value)} %`;
}

const percentFormatter = new Intl.NumberFormat("uk-UA", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
});

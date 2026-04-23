export function formatUah(value: number) {
    return uahFormatter.format(value);
}

const uahFormatter = new Intl.NumberFormat("uk-UA", {
    style: "currency",
    currency: "UAH",
});

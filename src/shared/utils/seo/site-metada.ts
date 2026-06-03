import { endpoints } from "@/shared/infra/config/endpoints";

export const siteMetadata = {
    name: "LedgerFlow",
    defaultTitle: "LedgerFlow | Універсальна система обліку та моніторингу",
    titleTemplate: "%s | LedgerFlow",
    description: `Універсальна платформа для обліку ресурсів, показників лічильників, 
    товарних запасів та бізнес-показників. Керуйте витратами, інвентаризацією та персоналом в єдиній ERP-системі.`,
    defaultKeywords: [
        "облік показників",
        "моніторинг ресурсів",
        "управління запасами",
        "фінансові звіти",
        "графіки працівників",
        "облік витрат",
        "інвентаризація складу",
        "ERP для бізнесу",
        "показники лічильників",
    ],
    url: process.env.NEXT_PUBLIC_APP_URL ?? endpoints.localhost,
    ogImage: "/auth-background.png",
};

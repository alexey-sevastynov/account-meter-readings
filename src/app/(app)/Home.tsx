"use client";

import { Title } from "@/shared/ui/typography/title/Title";
import { Text } from "@/shared/ui/typography/text/Text";
import { textPositions } from "@/shared/ui/typography/text-position";

interface HomeProps {
    userName?: string;
}

export function Home({ userName }: HomeProps) {
    return (
        <div className="flex flex-col">
            <Title textPosition={textPositions.left}>
                Ласкаво просимо на головну сторінку, {userName ? userName : "Гість"}!
            </Title>
            <Text>Ви успішно ввійшли в систему.</Text>
        </div>
    );
}

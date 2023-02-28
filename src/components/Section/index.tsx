import Box from '../Box';
import Card from '../Card';
import Text from '../Text';

interface SectionProps {
    title: string;
}

export default function Section({ title }: SectionProps) {
    return (
        <Box as="section">
            <Box className="pb-1">
                <Text as="h2" className="text-lg font-bold text-neutral-800">
                    {title}
                </Text>
            </Box>
            <Box className="flex flex-wrap justify-between gap-3 lg:gap-[1.3rem] md:gap-[2.1rem]">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
        </Box>
    );
}

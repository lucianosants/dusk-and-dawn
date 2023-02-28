import Container from '@/src/components/Container';
import Box from '@/src/components/Box';
import Section from '@/src/components/Section';

export default function HomeScreen() {
    return (
        <Container isCol>
            <Box className="flex flex-col gap-8">
                <Section title="Produtos em alta" />
                <Section title="Casa e decoração" />
                <Section title="Tecnologia e eletrônicos" />
            </Box>
        </Container>
    );
}

import { ReactNode } from 'react';
import Link from 'next/link';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

import data from '@/_data/footer/pt-br.json';

import Box from '@/src/components/Box';
import Text from '@/src/components/Text';

interface LinksProps {
    title: string;
    links: string[];
}

function Links({ title, links }: LinksProps) {
    return (
        <Box className="flex flex-col gap-2">
            <Text as="strong" className="text-lg text-white">
                {title}
            </Text>

            {links.map((link, index) => (
                <Link key={`${index} - ${link}`} href="/" title={link}>
                    <Text
                        as="p"
                        className="text-neutral-50 hover:text-secondary-700">
                        {link}
                    </Text>
                </Link>
            ))}
        </Box>
    );
}

interface SocialLinksProps {
    children: ReactNode;
    url: string;
    title: string;
}

function SocialLink({ children, title, url }: SocialLinksProps) {
    return (
        <Link href={url} title={title} target="_blank" className="h-fit">
            <Text
                as="p"
                className="p-3 rounded-full hover:bg-neutral-variant-100 bg-neutral-variant-50 text-neutral-900">
                {children}
            </Text>
        </Link>
    );
}

export default function Footer() {
    const { all_links, brand, social_links, legal_links, copyright } = data;

    const { enterprise, communities, useful_links } = all_links;
    const { linkedin, github, instagram } = social_links;

    return (
        <Box
            as="footer"
            className="bg-gradient-to-r from-danger-600 to-primary-600">
            <Box className="container flex flex-col flex-wrap justify-between gap-4 px-4 mx-auto sm:flex-row py-9">
                <Box>
                    <Text className="text-2xl italic font-black text-neutral-variant-50 hover:opacity-90">
                        {brand}
                    </Text>
                </Box>

                <Links
                    title={enterprise.title.toUpperCase()}
                    links={enterprise.links}
                />

                <Links
                    title={communities.title.toUpperCase()}
                    links={communities.links}
                />

                <Links
                    title={useful_links.title.toUpperCase()}
                    links={useful_links.links}
                />

                <Box className="flex gap-3">
                    <SocialLink title={linkedin.title} url={linkedin.url}>
                        <BsLinkedin />
                    </SocialLink>

                    <SocialLink title={github.title} url={github.url}>
                        <BsGithub />
                    </SocialLink>

                    <SocialLink title={instagram.title} url={instagram.url}>
                        <BsInstagram />
                    </SocialLink>
                </Box>
            </Box>

            <Box className="container flex flex-wrap items-center justify-between px-4 py-6 mx-auto">
                <Box className="flex gap-3">
                    {legal_links.map((link, index) => (
                        <Link
                            key={`${index} - ${link}`}
                            href="#"
                            className="text-xs font-medium text-white hover:text-secondary-700">
                            {link}
                        </Link>
                    ))}
                </Box>

                <Text className="text-sm text-neutral-variant-50">
                    {copyright}
                </Text>
            </Box>
        </Box>
    );
}

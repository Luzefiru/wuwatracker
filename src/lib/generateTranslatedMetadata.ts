import { getTranslations } from "next-intl/server";

/**
 * Creates a metadata generator function that fetches translated titles and descriptions based on the provided namespace.
 *
 * @param namespace - The namespace from which translations will be fetched. This determines the context for the translations.
 * @returns An asynchronous function that returns an object containing the translated title and description.
 */
export default function getTranslatedMetadata(namespace: string) {
  const generateMetadata = async ({
    params: { locale },
  }: Readonly<{
    params: { locale: string };
  }>) => {
    const t = await getTranslations({ locale, namespace: namespace });

    return {
      title: t("title"),
      description: t("description"),
    };
  };

  return generateMetadata;
}

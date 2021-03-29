import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
  "eventType",
  "event",
  "siteSetting",
  "benefit",
  "benefitType",
  "ressource",
  "ressourceType",
].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title('Configurations')
        .child(
          S.list()
            .title('Configurations')
            .items([
              S.listItem()
                .title('Documents')
                .child(
                  S.editor()
                    .id('setting')
                    .schemaType("siteSetting")
                    .documentId("global-config")
                ),
              S.listItem()
                .title('Catégories')
                .child(
                  S.list()
                    .title('Catégories')
                    .items([
                      S.listItem()
                        .title("Catégories d'activité")
                        .child(
                          S.documentTypeList('eventType')
                        ),
                      S.listItem()
                        .title("Types d'avantage")
                        .child(
                          S.documentTypeList('benefitType')
                        ),
                      S.listItem()
                        .title("Types de ressource")
                        .child(
                          S.documentTypeList('ressourceType')
                        ),
                    ])
                ),
            ])
        ),
        S.listItem()
      .title('Activités')
      .child(
        S.documentTypeList('eventType')
          .title('Catégories d\'activité')
          .child(categoryId =>
            S.documentList()
              .title('Activités')
              .filter('_type == "event" && $categoryId == eventType._ref')
              .params({ categoryId })
          )),
      S.listItem()
      .title('Avantages')
      .child(
        S.documentTypeList('benefitType')
          .title('Types d\'avantage')
          .child(categoryId =>
            S.documentList()
              .title('Avantages')
              .filter('_type == "benefit" && $categoryId == benefitType._ref')
              .params({ categoryId })
          )),
      S.listItem()
        .title('Ressources')
        .child(
          S.documentTypeList('ressourceType')
            .title('Types de ressource')
            .child(categoryId =>
              S.documentList()
                .title('Ressources')
                .filter('_type == "ressource" && $categoryId == ressourceType._ref')
                .params({ categoryId })
            )),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ]);

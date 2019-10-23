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
        .title('Configurations - old')
        .child(
          S.editor()
            .id('setting')
            .schemaType("siteSetting")
            .documentId("global-config")
        ),
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
                          S.documentList()
                            .title("Catégories d'activité")
                            .menuItems(S.documentTypeList("eventType").getMenuItems())
                            .filter('_type == $type && !defined(parents)')
                            .params({ type: 'eventType' })
                        ),
                      S.listItem()
                        .title("Types d'avantage")
                        .child(
                          S.documentList()
                            .title("Types d'avantage")
                            .menuItems(S.documentTypeList("benefitType").getMenuItems())
                            .filter('_type == $type && !defined(parents)')
                            .params({ type: 'benefitType' })
                        ),
                      S.listItem()
                        .title("Types de ressource")
                        .child(
                          S.documentList()
                            .title("Types de ressource")
                            .menuItems(S.documentTypeList("ressourceType").getMenuItems())
                            .filter('_type == $type && !defined(parents)')
                            .params({ type: 'ressourceType' })
                        ),
                    ])
                ),
            ])
        ),
      S.listItem()
        .title("Activités")
        .child(
          S.documentList()
            .title("Catégories d'activité")
            .menuItems(S.documentTypeList("eventType").getMenuItems())
            .filter('_type == $type && !defined(parents)')
            .params({ type: 'eventType' })
            .child(categoryId => {
              return S.documentList()
                .title('Activités')
                .menuItems(S.documentTypeList('event').getMenuItems())
                .filter('_type == $type && eventType._ref == $categoryId')
                .params({ type: 'event', categoryId })}
              )
        ),
      S.listItem()
        .title("Avantages")
        .child(
          S.documentList()
            .title("Types d'avantage")
            .menuItems(S.documentTypeList("benefitType").getMenuItems())
            .filter('_type == $type && !defined(parents)')
            .params({ type: 'benefitType' })
            .child(categoryId => {
              return S.documentList()
                .title('Avantages')
                .menuItems(S.documentTypeList('benefit').getMenuItems())
                .filter('_type == $type && benefitType._ref == $categoryId')
                .params({ type: 'benefit', categoryId })}
              )
        ),
      S.listItem()
        .title("Ressources")
        .child(
          S.documentList()
            .title("Types de ressource")
            .menuItems(S.documentTypeList("ressourceType").getMenuItems())
            .filter('_type == $type && !defined(parents)')
            .params({ type: 'ressourceType' })
            .child(categoryId => {
              return S.documentList()
                .title('Ressources')
                .menuItems(S.documentTypeList('ressource').getMenuItems())
                .filter('_type == $type && ressourceType._ref == $categoryId')
                .params({ type: 'ressource', categoryId })}
              )
        ),
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ]);

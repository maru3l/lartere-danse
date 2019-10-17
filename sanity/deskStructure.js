import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![
  "eventType",
  "event",
  "siteSetting",
  "benefit",
  "benefitType"
].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title('Configurations')
        .child(
          S.editor()
            .id('setting')
            .schemaType("siteSetting")
            .documentId("global-config")
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
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ]);

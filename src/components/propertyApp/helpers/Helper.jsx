export const isPropertySelected = (property, propertyType, bathrooms, bedrooms) => {
   const isSamePropertyType = propertyType === null || propertyType.key === "ANY" ? true : property.propertyType === propertyType.key
   const isSameBathsNumber = bathrooms === null || bathrooms.key === "ANY" ? true : (property.baths || "0") === bathrooms.key
   const isSameBedsNumber = bedrooms === null || bedrooms.key === "ANY" ? true : (property.beds || "0") === bedrooms.key

   return isSameBathsNumber && isSamePropertyType && isSameBedsNumber
}
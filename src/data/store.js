// Store contact details, used by the Footer and the Contact page.
// Change them here and they update everywhere.
const store = {
  name: 'KALIKHA Sustainable Essentials',
  email: 'kalikha.store@gmail.com',
  phone: '09484599270',
  location: 'Iloilo City, Philippines',
}

export const phoneHref = `tel:+63${store.phone.replace(/\s/g, '').replace(/^0/, '')}`
export const emailHref = `mailto:${store.email}`

export default store

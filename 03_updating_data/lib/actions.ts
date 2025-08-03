export async function createUser(formData: FormData) {
  'use server'
  const userData = {
    email: formData.get('floating_email'),
    password: formData.get('floating_password'),
    repeatPassword: formData.get('repeat_password'),
    firstName: formData.get('floating_first_name'),
    lastName: formData.get('floating_last_name'),
    phone: formData.get('floating_phone'),
    company: formData.get('floating_company'),
  }

  // Add user Here
}
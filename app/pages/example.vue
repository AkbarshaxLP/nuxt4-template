<template>
  <div class="p-6 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Zod Validation Examples</h1>

    <!-- Example 1: Basic Form Validation -->
    <div class="mb-8 p-4 border rounded">
      <h2 class="text-xl font-semibold mb-4">1. Basic Form Validation</h2>
      <form @submit.prevent="handleBasicForm" class="space-y-3">
        <div>
          <Input v-model="basicForm.email" type="text" placeholder="Email" />
          <p v-if="basicErrors.email" class="text-red-500 text-sm mt-1">{{ basicErrors.email }}</p>
        </div>
        <div>
          <Input v-model="basicForm.password" type="password" placeholder="Password (min 8 chars)" />
          <p v-if="basicErrors.password" class="text-red-500 text-sm mt-1">{{ basicErrors.password }}</p>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>

    <!-- Example 2: Nested Object Validation -->
    <div class="mb-8 p-4 border rounded">
      <h2 class="text-xl font-semibold mb-4">2. Nested Object Validation</h2>
      <form @submit.prevent="handleUserForm" class="space-y-3">
        <div>
          <Input v-model="userForm.name" type="text" placeholder="Name" />
          <p v-if="userErrors.name" class="text-red-500 text-sm mt-1">{{ userErrors.name }}</p>
        </div>
        <div>
          <Input v-model="userForm.age" type="number" placeholder="Age (18-100)" />
          <p v-if="userErrors.age" class="text-red-500 text-sm mt-1">{{ userErrors.age }}</p>
        </div>
        <div>
          <Input v-model="userForm.address.city" type="text" placeholder="City" />
          <p v-if="userErrors.city" class="text-red-500 text-sm mt-1">{{ userErrors.city }}</p>
        </div>
        <div>
          <Input v-model="userForm.address.zipCode" type="text" placeholder="Zip Code" />
          <p v-if="userErrors.zipCode" class="text-red-500 text-sm mt-1">{{ userErrors.zipCode }}</p>
        </div>
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Submit User</button>
      </form>
    </div>

    <!-- Example 3: Array Validation -->
    <div class="mb-8 p-4 border rounded">
      <h2 class="text-xl font-semibold mb-4">3. Array Validation</h2>
      <div class="space-y-3">
        <div v-for="(tag, index) in arrayForm.tags" :key="index" class="flex gap-2">
          <Input v-model="arrayForm.tags[index]" type="text" placeholder="Tag (min 2 chars)"
            class="border px-3 py-2 rounded flex-1" />
          <button type="button" @click="removeTag(index)" class="bg-red-500 text-white px-3 py-2 rounded">
            Remove
          </button>
        </div>
        <button type="button" @click="addTag" class="bg-gray-500 text-white px-4 py-2 rounded">
          Add Tag
        </button>
        <p v-if="arrayErrors.tags" class="text-red-500 text-sm">{{ arrayErrors.tags }}</p>
        <button type="button" @click="handleArrayForm" class="bg-purple-500 text-white px-4 py-2 rounded">
          Validate Array
        </button>
      </div>
    </div>

    <!-- Example 4: Store Counter -->
    <div class="mb-8 p-4 border rounded">
      <h2 class="text-xl font-semibold mb-4">4. Persist Store Example</h2>
      <div class="flex gap-3 text-secondary mobile:text-primary text-2xl justify-center bg-slate-200 py-2">
        <button type="button" @click="persistStore.decrement(1)">-</button>
        {{ persistStore.count }}
        <button type="button" @click="persistStore.increment(1)">+</button>
      </div>
    </div>

    <NuxtLink class="block text-center underline" to="/">to index page</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { z } from 'zod'

const persistStore = usePersistStore()

// Example 1: Basic Form Schema
const basicFormSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

const basicForm = reactive({
  email: '',
  password: '',
})

const basicErrors = reactive({
  email: '',
  password: '',
})

const handleBasicForm = () => {
  basicErrors.email = ''
  basicErrors.password = ''

  const result = basicFormSchema.safeParse(basicForm)
  if (!result.success) {
    result.error.issues.forEach((issue) => {
      basicErrors[issue.path[0] as keyof typeof basicErrors] = issue.message
    })
  } else {
    alert('Basic form is valid! ✅')
    console.log('Valid data:', result.data)
  }
}

// Example 2: Nested Object Schema
const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  age: z.number().min(18, 'Must be at least 18').max(100, 'Must be less than 100'),
  address: z.object({
    city: z.string().min(2, 'City is required'),
    zipCode: z.string().regex(/^\d{5}$/, 'Zip code must be 5 digits'),
  }),
})

const userForm = reactive({
  name: '',
  age: 0,
  address: {
    city: '',
    zipCode: '',
  },
})

const userErrors = reactive({
  name: '',
  age: '',
  city: '',
  zipCode: '',
})

const handleUserForm = () => {
  userErrors.name = ''
  userErrors.age = ''
  userErrors.city = ''
  userErrors.zipCode = ''

  const result = userSchema.safeParse(userForm)
  if (!result.success) {

    // error keys
    console.log(result.error.issues.map(resp => resp.path.join('.')));

    result.error.issues.forEach((issue) => {
      const path = issue.path.join('.')
      if (path === 'name') userErrors.name = issue.message
      if (path === 'age') userErrors.age = issue.message
      if (path === 'address.city') userErrors.city = issue.message
      if (path === 'address.zipCode') userErrors.zipCode = issue.message
    })
  } else {
    alert('User form is valid! ✅')
    console.log('Valid user:', result.data)
  }
}

// Example 3: Array Schema
const arraySchema = z.object({
  tags: z.array(z.string().min(2, 'Each tag must be at least 2 characters')).min(1, 'At least one tag is required'),
})

const arrayForm = reactive({
  tags: [''],
})

const arrayErrors = reactive({
  tags: '',
})

const addTag = () => {
  arrayForm.tags.push('')
}

const removeTag = (index: number) => {
  arrayForm.tags.splice(index, 1)
}

const handleArrayForm = () => {
  arrayErrors.tags = ''

  const result = arraySchema.safeParse(arrayForm)
  if (!result.success) {
    arrayErrors.tags = result.error.issues.map(i => i.message).join(', ')
  } else {
    alert('Array form is valid! ✅')
    console.log('Valid tags:', result.data)
  }
}
</script>

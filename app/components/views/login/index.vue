<template>
  <div>
    <Card class="m-auto mt-[10%] max-w-sm">
      <CardHeader class="text-center">
        <CardTitle class="text-2xl">
          Авторизация
        </CardTitle>
        <CardDescription>
          Введите свой логин и пароль, чтобы войти в свою учетную запись.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="login">Логин</Label>
            <Input
              id="login"
              type="text"
              placeholder="Логин"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Пароль</Label>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button @click="login" type="submit" class="w-full">
            Войти
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

function login () {
  router.push('/')
}
</script>
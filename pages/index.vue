<template>
  <div class="w-full p-4">
    <div>
      <h1 class="text-3xl mb-2 font-medium">Tabella richieste</h1>
      <p>
        Questa app è collegata allo stesso DB di tqg-admin-test. Se vuoi effettuare una richiesta di test vai all'app <a href="https://tqg-admin-test.netlify.app/" class="text-blue-900" target="_blank">tqg-admin-test</a>
      </p>
      <table class="table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Title</th>
            <th class="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td class="border px-4 py-2">{{ item.id }}</td>
            <td class="border px-4 py-2">{{ item.title }}</td>
            <td class="border px-4 py-2">{{ item.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { data, pending } = await useFetch(`/api/requests`);
if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
    fatal: true,
  });
}
</script>
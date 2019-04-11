<template>
  <v-layout pa-4 wrap>
    <v-flex class="display-2 font-weight-light" xs12>
      Пользователи
    </v-flex>

    <v-flex xs12>
      <v-data-table
        :headers="headers"
        :items="desserts"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.calories }}</td>
          <td class="text-xs-right">{{ props.item.fat }}</td>
          <td class="text-xs-right">{{ props.item.carbs }}</td>
          <td class="text-xs-right">{{ props.item.protein }}</td>
          <td class="text-xs-right">{{ props.item.iron }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'UserAdmin',
  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'left',
        value: 'name'
      },
      { text: 'Login', value: 'login' },
      { text: 'Fat (g)', value: 'password' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' }
    ],
  })
}
</script>

<style>

</style>

<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn
      color="primary"
      icon="style"
      label="Add Loyalty Card"
      @click="goToCreateLoyaltyCard"
    />
  </div>

  <div class="q-pa-md">
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-left">First Name</th>
          <th class="text-right">Last Name</th>
          <th class="text-right">Membership Tier</th>
          <th class="text-right">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(record, index) in records" :key="index">
          <td>{{ record.fname }}</td>
          <td>{{ record.lname }}</td>
          <td>{{ record.mem_tier }}</td>
          <td>{{ record.desc }}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const loading = ref([false, false, false, false, false, false]);

    const progress = ref(false);

    function simulateProgress(number) {
      // we set loading state
      loading.value[number] = true;

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[number] = false;
      }, 3000);
    }

    return {
      loading,
      progress,
      simulateProgress,
      records: [],
    };
  },
  methods: {
    goToCreateLoyaltyCard() {
      this.$router.push("/createloyaltycard");
    },
    listRecords() {
      const data = localStorage.getItem("records");
      this.records = JSON.parse(data);
      console.log(this.records);
    },
  },
  mounted() {
    // Call the onPageLoad function when the component is mounted
    this.listRecords();
  },
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
.no-task {
  opacity: 0.5;
}
</style>

<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form class="q-gutter-md">
      <div class="q-pa-md">
        <div>First Name * <br /></div>
        <q-input
          filled
          v-model="newloyaltyCard.fname"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type your first name',
          ]"
        />
      </div>
      <div class="q-pa-md">
        <div>Last Name * <br /></div>
        <q-input
          filled
          v-model="newloyaltyCard.lname"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type your last name',
          ]"
        />
      </div>

      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->

      <div class="q-pa-md">
        <div>Membership Tier * <br /></div>

        <q-radio
          v-for="mem_tier_option in mem_tier_options"
          :key="mem_tier_option"
          v-model="newloyaltyCard.mem_tier"
          checked-icon="task_alt"
          unchecked-icon="panorama_fish_eye"
          :val="mem_tier_option"
          :label="mem_tier_option"
          required
        />
        <!-- <p v-if="!hasMemValue" class="validation-error">
          Please select an option
        </p> -->
      </div>

      <div class="q-pa-md" style="max-width: 400px">
        <div>Description *<br /></div>
        <q-input v-model="newloyaltyCard.desc" filled type="textarea" />
      </div>

      <div>
        <q-btn label="Submit" type="submit" color="primary" @click="onSubmit" />
        <q-btn label="Back" type="submit" color="primary" @click="onBack" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();
export default {
  setup() {
    return {
      mem_tier_options: ["Gold", "Silver", "Platinum"],
      records: ref([]),
      newloyaltyCard: ref({
        fname: "",
        lname: "",
        mem_tier: "",
        desc: "",
      }),
    };
  },
  methods: {
    onSubmit() {
      this.newloyaltyCard.id = this.records.length + 1;
      this.records.push({ ...this.newloyaltyCard });
      // Save updated records to local storage
      localStorage.setItem("records", JSON.stringify(this.records));
      this.$router.push("/");
    },
    onBack() {
      this.$router.push("/");
    },
  },
  mounted() {
    // Load records from local storage when component is mounted
    const storedRecords = localStorage.getItem("records");
    if (storedRecords) {
      this.records = JSON.parse(storedRecords);
    }
  },
};
</script>

<style>
.validation-error {
  color: red;
}
</style>

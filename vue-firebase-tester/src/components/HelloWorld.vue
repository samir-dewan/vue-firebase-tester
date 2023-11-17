<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from '@firebase/firestore';
import { db } from "../firebase/firebase.config";
import SimpleInputText from './questionnaire/SimpleInputText.vue';

interface NameData {
  id: string,
  first_name: string,
  last_name: string,
  born: number | null
}

interface AddedData {
  first_name: string,
  last_name: string,
  born: number | null
}

const data = ref<NameData[]>([]);

onMounted(async () => {
  await refreshNames();
});

const addingName: AddedData = {first_name: "", last_name: "", born: null};

async function addNewName() {
  await addDoc(collection(db, 'users'), {
    ...addingName
  });
  await refreshNames();
}

async function refreshNames() {
  data.value = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    data.value.push({ id: doc.id, ...doc.data() } as NameData);
  });
}

async function deleteName(id: string) {
  try {
    console.log('id of deleted item', id);
    await deleteDoc(doc(collection(db, 'users'), id));
    await refreshNames();
  } catch (error) {
    console.log("error", error);
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">hello</h1>
    <SimpleInputText />
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      <ul>
        <div v-for="datum in data" :key="datum.id">
          <p>{{ datum.first_name }} {{ datum.last_name }}</p>
          <button :id=datum.id @click="deleteName(datum.id)">Delete Name</button>
        </div>
      </ul>
      <input v-model="addingName.first_name" id="addingName.first_name"/>
      <input v-model="addingName.last_name" id="addingName.last_name"/>
      <input v-model="addingName.born" id="addingName.born"/>
      <button @click="addNewName()">add Name</button>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

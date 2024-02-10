<script>
    import { onMount } from "svelte";
import "~/styles/bootstrap-icons.css";
import  "~/styles/bootstrap53.min.css";
import '~/styles/formio.full.min.css';

import { Formio } from 'formiojs';
      let form;
      let formio; 
  let selected_language = "ru";

  $: {
    if (formio && selected_language) {
      formio.language = selected_language;
    }
  }

    onMount(() => {
      if (form) {
        Formio.createForm(form, 'https://formio.cons.ud63.online/find/tur').then((formioInstance) => {
            //form=fetch("../lib/f.html");
          formio = formioInstance;
        });
      }
    });

</script>

<slot />
    <div id="app" class="container"> 
      <div bind:this={form} id="form"></div>
    </div>
      


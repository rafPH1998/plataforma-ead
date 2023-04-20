<template>
    <div class="pageTitle">
        <span class="title">LaraFood</span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>

    <div class="content">
            <div class="container">
               
                <ModulesList/>

                <div class="right">
                    <div class="content">
                        
                        <player-video/>

                        <supports-list/>
                        
                    </div>
                </div>
            </div>
        </div>
  </template>
  
  
  <script>
  
  import ModulesList from '@/views/modules/components/ModulesList.vue';
  import PlayerVideo from '@/views/modules/components/PlayerVideo.vue';
  import SupportsList from '@/views/modules/components/SupportsList.vue';

  export default {
    name: 'ModulesAndLessons',
    components: {
        ModulesList,
        PlayerVideo,
        SupportsList
    }
  }
  </script>
  
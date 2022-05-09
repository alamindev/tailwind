<template>
  <div>
     <LandingOneHeader/>
      <slot />
     <LandingOneFooter/>
  </div>
</template>
 <script> 
 export default{ 
   name: 'landingOne'
 }
</script>
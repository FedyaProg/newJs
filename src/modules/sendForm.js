 const sendForm = () => {

     const errorMessage = 'Something gone wrong!',
         loadMessage = 'Loading...',
         successMessage = 'Thanks, We will contact you!';

     const forms = document.querySelectorAll('form');
     const statusMessage = document.createElement('div');
     statusMessage.style.cssText = 'font-size: 2rem;';


     forms.forEach(form => {
         form.addEventListener('input', event => {
             const target = event.target;
             if (target.name === 'user_phone') {
                 target.value = target.value.replace(/[^\+\d]/g, '');
             }
             if (target.name === 'user_name' || target.name === 'user_message') {
                 target.value = target.value.replace(/[^а-я ]/gi, '');
             }
         });

         const postData = body => fetch('./server.php', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(body),
             mode: 'cors'
         });


         form.addEventListener('submit', event => {
             event.preventDefault();
             form.append(statusMessage);
             statusMessage.style.cssText = `font-size: 2rem; color: white; `;
             const formData = new FormData(form);
             statusMessage.textContent = loadMessage;

             const body = {};
             for (const val of formData.entries()) {
                 body[val[0]] = val[1];
             }

             const outputData = () => {
                 statusMessage.style.cssText = `font-size: 2rem; color: white; `;
                 statusMessage.textContent = successMessage;
                 form.reset();
             };

             const error = () => {
                 statusMessage.style.cssText = `font-size: 2rem; color: red; `;
                 statusMessage.textContent = errorMessage;
             };


             postData(body)
                 .then(res => {
                     if (res.status !== 200) {
                         throw 'error !!! ';
                     }
                     outputData();
                 })
                 .catch(error);
         });
     });
 };


export default sendForm;

# React Integrador con Backend

Url del Backend: https://integrador-backend-bara1422.vercel.app/

---

# Js Integrador a React# nucba-zapi-react

Quedan algunas cosas que no pude solucionar como que al enviar la orden se borre el precio del envio, intente crear una action para eliminar una orden y como no pude crear el doc con setDoc para darle yo la id, tuve que hacerlo con addDoc que crea una id aleatoria y no pude recuperarla... Con setDoc podia crear las ordenes en firebase pero al momento de pasar del checkout a mis ordenes fallaba... En un momento pude recuperar la id de la orden haciendo sobre el addDoc un setDoc para agregarle la orderId pero al eliminar se eliminaba pero tambien se me generaba otra orden solo con el orderId.

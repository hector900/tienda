import React from "react";
import Header from "../components/Header";

const Faq = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="content p-6">
                    <h1>Preguntas frecuentes</h1>
                    <h2>¿Cómo puedo realizar un pedido?</h2>
                    <p>Para realizar un pedido, simplemente navega por nuestra tienda en línea, selecciona los productos que te interesen y agrégalos al carrito de compras. Luego, sigue los pasos para completar tu compra y proporciona la información de envío y pago necesaria.</p>

                    <h2>¿Cuáles son las opciones de pago disponibles?</h2>
                    <p>Aceptamos una variedad de opciones de pago, incluyendo tarjetas de crédito/débito, PayPal, transferencias bancarias y otros métodos de pago seguros. Puedes seleccionar la opción que mejor se adapte a tus necesidades durante el proceso de compra.</p>

                    <h2>¿Cuánto tiempo tardará en llegar mi pedido?</h2>
                    <p>El tiempo de entrega puede variar dependiendo de tu ubicación y del método de envío seleccionado. Por lo general, procesamos y enviamos los pedidos en un plazo de [X] días hábiles. Una vez enviado, recibirás un correo electrónico de confirmación con la información de seguimiento para que puedas rastrear tu paquete.</p>

                    <h2>¿Puedo devolver o cambiar un producto?</h2>
                    <p>Sí, aceptamos devoluciones y cambios en la mayoría de los productos dentro de [X] días hábiles después de la recepción del pedido, siempre y cuando el producto esté en su estado original y no haya sido usado o dañado. Por favor, consulta nuestra política de devoluciones para obtener más información y seguir los pasos necesarios.</p>

                    <h2>¿Cómo puedo contactar con el servicio de atención al cliente?</h2>
                    <p>Estamos aquí para ayudarte en cualquier momento. Puedes contactarnos a través de nuestro formulario de contacto en línea, por correo electrónico a <a href="mailto:correo@dominio.com">correo@dominio.com</a>, o por teléfono al <a href="tel:+123456789">+123456789</a>. Nuestro equipo estará encantado de resolver cualquier duda o problema que puedas tener.</p>
                </div>
            </div>
        </>
    );
}

export default Faq;

let nuestrosProductos = [
    producto1 = {
        titulo: "Desconexión natural en San Carlos de Bariloche",
        destino: "Bariloche",
        fechas: "Marzo",
        categoria: "Promocion",
        contenido: {
            hotel: "Hotel Cristal",
            boletos: {
                ida: {
                    Aeropuerto: "AEP-BRC",
                    Aerolinea: "Flybondi",
                    horario: "23:10-01:25",
                    equipaje: "mochila 5kg",
                },
                vuelta: {
                    Aeropuerto: "BRC-EZE",
                    Aerolinea: "Aerolíneas Argentinas",
                    horario: "22:30-00:35",
                    equipaje: "mochila 5kg, equipaje de mano 8kg, equipaje de bodega 20kg",
                },
            },
        },
        actividad: {
            opcion1: "Circuito chico",
            opcion2: "Kayak en Lago Gutierrez",
            opcion3: "San Martín de los Andes por la Ruta de los 7 Lagos",
        },
        crucero: "",
        traslados: "Ida y vuelta del aeropuerto al hotel",
        descripcion: "ALOJAMIENTO 3 noches en los mejores hoteles con cercania al centro, Habitación Doble Estándar con Vista a la Colina con Desayuno, Wi-Fi gratis en zonas comunes · Estacionamiento gratis, El seguro de tu viaje",
        precio: "81.206",
        imagenes: "",
    },
    producto2 = {
        titulo: "Postales de montaña en Ushuaia",
        destino: "Ushuaia",
        fechas: "Marzo",
        categoria: "Destacado",
        contenido: {
            hotel: "Hosteria Mi Vida",
            boletos: {
                ida: {
                    Aeropuerto: "AEP-USH",
                    Aerolinea: "Aerolíneas Argentinas",
                    horario: "08:40-12:15",
                    equipaje: "mochila 5kg, equipaje de mano 8kg, equipaje de bodega 20kg",
                },
                vuelta: {
                    Aeropuerto: "USH-AEP",
                    Aerolinea: "JetSMART",
                    horario: "09:20-12:46",
                    equipaje: "mochila 5kg",
                },
            },
        },
        actividad: {
            opcion1: "Experiencia Parque Nacional Tierra del Fuego",
        },
        crucero: "",
        traslados: "Ida y vuelta del aeropuerto al hotel",
        descripcion: "4 noches en los mejores hoteles con cercania al centro, Habitación Doble Estándar con Vista al Lago, con Desayuno incluido, Wi-Fi gratis en zonas comunes · Estacionamiento gratis · Calefacción en zonas comunes, El seguro de tu viaje",
        precio: "83.956",
        imagenes: "",
    },
    producto3 = {
        titulo: "Montañas y aire puro en El Calafate",
        destino: "Calafate",
        fechas: "Marzo",
        categoria: "Promocion",
        contenido: {
            hotel: "Quijote Hotel",
            boletos: {
                ida: {
                    Aeropuerto: "AEP-FTE",
                    Aerolinea: "Aerolíneas Argentinas",
                    horario: "04:20-07:35",
                    equipaje: "mochila 5kg, equipaje de mano 8kg, equipaje de bodega 20kg",
                },
                vuelta: {
                    Aeropuerto: "FTE-EZE",
                    Aerolinea: "Aerolíneas Argentinas",
                    horario: "10:35-13:30",
                    equipaje: "mochila 5kg, equipaje de mano 8kg, equipaje de bodega 20kg",
                },
            },
        },
        actividad: {
            opcion1: "Navegación frente al Glaciar Perito Moreno",
        },
        crucero: "",
        traslados: "Ida y vuelta del aeropuerto al hotel",
        descripcion: "4 noches en los mejores hoteles con cercania al centro, Habitación Doble Estándar con Minibar y Desayuno incluido,Wi-Fi gratis en zonas comunes · Estacionamiento gratis, El seguro de tu viaje",
        precio: "79.766",
        imagenes: "",
    },
    producto4 = {
        titulo: "Bajo el encanto de Mendoza",
        destino: "Mendoza",
        fechas: "Marzo",
        categoria: "Destacado",
        contenido: {
            hotel: "Nutibara Hotel",
            boletos: {
                ida: {
                    Aeropuerto: "AEP-MDZ",
                    Aerolinea: "Flybondi",
                    horario: "12:40-14:30",
                    equipaje: "mochila 5kg",
                },
                vuelta: {
                    Aeropuerto: "MDZ-AEP",
                    Aerolinea: "Flybondi",
                    horario: "23:05-00:40",
                    equipaje: "mochila 5kg",
                },
            },
        },
        actividad: {
            opcion1: "City tour",
        },
        crucero: "",
        traslados: "Ida y vuelta del aeropuerto al hotel",
        descripcion: "4 noches en los mejores hoteles con cercania al centro, Habitación Estándar con Desayuno incluido,Wi-Fi gratis en zonas comunes · Estacionamiento gratis · Piscina ·Aire Acondicionado en zonas comunes, El seguro de tu viaje",
        precio: "41.605",
        imagenes: "",
    },
    producto5 = {
        titulo: "Explora los colores de Jujuy",
        destino: "Jujuy",
        fechas: "Marzo",
        categoria: "Destacado",
        contenido: {
            hotel: "Ohasis Jujuy Hotel Spa",
            boletos: {
                ida: {
                    Aeropuerto: "AEP-JUJ",
                    Aerolinea: "JetSMART",
                    horario: "05:20-07:36",
                    equipaje: "mochila 5kg",
                },
                vuelta: {
                    Aeropuerto: "JUJ-AEP",
                    Aerolinea: "JetSMART",
                    horario: "09:11-11:19",
                    equipaje: "mochila 5kg",
                },
            },
        },
        actividad: {
            opcion1: "Excursion a Cafayate",
            opcion2: "Trekking Quebrada de Humahuaca con cerro 7 colores",
            opcion3: "Trekking Salinas de Pumamarca",
        },
        crucero: "",
        traslados: "Ida y vuelta del aeropuerto al hotel",
        descripcion: "4 noches en los mejores hoteles con cercania al centro, Habitación Estándar con Desayuno incluido, Wi-Fi gratis en zonas comunes · Estacionamiento gratis · Servicio al cuarto ·Aire Acondicionado en zonas comunes,El seguro de tu viaje",
        precio: "56.361",
        imagenes: "",
    },
]
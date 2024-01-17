import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { useState } from "react";

/* const styles = StyleSheet.create({
    page: {
        backgroundColor: "#E4E4E4",
        padding: 30,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
    },
    image: {
        marginRight: 10,
        borderRadius: '50%',
    },
    section: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
        padding: 10,
    },
    parragraph: {
        fontSize: 12,
        textAlign: "justify",
        lineHeight: 1.5,
        margin: 10,
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    }
}); */

const styles = StyleSheet.create({
    page: {
        // Estilos generales de la página
    },
    section_row: {
        display: "flex",
        flexDirection: "row",
        margin: 10,
        padding: 10,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        marginLeft: 10,
    },
    section_column: {
        display: "flex",
        flexDirection: "column",
        margin: 10,
        padding: 10,
    },
    image: {
        marginRight: 10,
        borderRadius: '100%',
        width: 350,
        height: 320,
    },
    image_qr: {
        height: 110,
        width: 110,
        alignSelf: "flex-end",
    },
    title_box: {
        display: "flex",
        justifyContent: "flex-start",
        margin: 10,
        padding: 10,
    },
    qr_box: {
        display:"flex",
        justifyContent: "flex-end",
    },
    title_h1: {
        fontSize: 24,
        fontWeight: "bold",
    },
    title_h2: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 10,
        fontWeight: "bold",
        textDecoration: 'underline',
    },
    title_h3: {
        fontSize: 12,
        lineHeight: 1.5,
        textDecoration: 'underline',
        fontWeight: "bold",
    },
    title_h4: {
        fontSize: 12,
        margin: 10,
        lineHeight: 1.5,
        textDecoration: 'underline',
        fontWeight: "bold",
    },
    parragraph: {
        fontSize: 10,
        textAlign: "justify",
        lineHeight: 1.5,
    },
    parragraph_2: {
        fontSize: 11,
        textAlign: "justify",
        lineHeight: 1.5,
        marginLeft: 10,
    },
    subtitle: {
        fontSize: 18,
        margin: 10,
        fontWeight: "extrabold",
        textDecoration: 'underline',
    },
});

function PDF() {

    const [imgPerfil, setImgPerfil] = useState('')

    fetch("https://api.github.com/users/Another818")
        .then(res => res.json())
        .then(response => {
            setImgPerfil(response.avatar_url)
        })
       /*  <Image src={imgPerfil} style={styles.image}/> */
        return (
            <Document>
                {/* Datos personales */}
                <Page size="A4" style={styles.page}>
                    <View style={styles.title_box}>
                        <Text style={styles.title_h1}>
                            Pablo Tomás Menna
                        </Text>
                    </View>
                    <View style={styles.section_row}>
                        <Image src={imgPerfil} style={styles.image}/>
                        <View style={styles.section_column}>
                            <View>
                                <Text style={styles.title_h2}>Datos personales:</Text>
                                <Text style={styles.parragraph}>
                                    Nacionalidad: ARGENTINA
                                </Text>
                                <Text style={styles.parragraph}>
                                    Fecha de nacimiento: 06/02/2003
                                </Text>
                                <Text style={styles.parragraph}>
                                    Estado civil: Soltero
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.title_h2}>Contacto:</Text>
                                <Text style={styles.title_h3}>Teléfono:</Text>
                                <Text style={styles.parragraph}>+54 3544 660113</Text>

                                <Text style={styles.title_h3}>Mail:</Text>
                                <Text style={styles.parragraph}>pablomenna@gmail.com</Text>
                                
                                <Text style={styles.title_h3}>Municipio, provincia:</Text>
                                <Text style={styles.parragraph}>Córdoba, Córdoba</Text>
                                
                                <Text style={styles.title_h3}>Barrio:</Text>
                                <Text style={styles.parragraph}>San Martín</Text>
                                
                                <Text style={styles.title_h3}>Código postal:</Text>
                                <Text style={styles.parragraph}>5008</Text> 
                            </View>

                            <View>
                                <Text style={styles.title_h2}>Redes sociales/web:</Text>
                                
                                <Text style={styles.title_h3}>GitHub:</Text>
                                <Text style={styles.parragraph}>
                                    https://github.com/Another818
                                </Text>
                                
                                <Text style={styles.title_h3}>LinkedIn:</Text>
                                <Text style={styles.parragraph}>
                                    https://www.linkedin.com/in/tomás-menna/
                                </Text>
                                
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.subtitle}>EXPERIENCIA LABORAL</Text>
                    </View>

                    <View>
                        <Text style={styles.subtitle}>EDUCACIÓN / IDIOMAS</Text>
                        <View style={styles.row}>
                            <Text style={styles.title_h3}>• UNIVERSITARIO:</Text> 
                            <Text style={styles.parragraph}>Ingeniería en Sistemas de Información (2021 - Actualmente)</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.title_h3}>• SECUNDARIO:</Text> 
                            <Text style={styles.parragraph}>Bachiller en Desarrollo de Software (Completo)</Text>
                        </View>

                        <Text style={styles.title_h4}>CURSOS DE FORMACION PROFESIONAL</Text> 
                        <Text style={styles.parragraph_2}>• Argentina Programa (1° Etapa) (Programación orientada a Objetos (PO.O.) y UML) 2022 - 60 horas</Text>

                        <Text style={styles.title_h4}>CURSOS EN IDIOMAS</Text> 
                        <Text style={styles.parragraph_2}>• Inglés: Lee - Escribe (Actualmente realizando cursos)</Text>
                    </View>
                    <View style={styles.qr_box}>
                        <Image src="/img/qrcode.png" style={styles.image_qr}/>
                    </View>
                </Page>
            </Document>
        );
}

export default PDF;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const userTestimonials = [
  {
    name: 'Html / Css',
    testimonial:
      "HTML (Hypertext Markup Language) è il linguaggio standard per creare la struttura delle pagine web, definendo elementi come titoli, paragrafi e liste. CSS (Cascading Style Sheets) applica lo stile visivo agli elementi HTML, controllando colori, dimensioni, spaziature e animazioni. Questo separa la struttura dal design, rendendo il sito più flessibile e manutenibile."
  },
  {
    name: 'JavaScript',
    testimonial:
      "JavaScript è il linguaggio di programmazione utilizzato per aggiungere interattività e comportamenti dinamici alle pagine web. Con JavaScript è possibile creare effetti visivi, gestire gli eventi degli utenti, comunicare con il server e molto altro. Questo consente di rendere le interfacce web più reattive e coinvolgenti per gli utenti finali."
  },
  {
    name: 'Php',
    testimonial:
      "PHP è un linguaggio di programmazione server-side utilizzato per lo sviluppo di applicazioni web dinamiche. Con PHP è possibile implementare la logica di business, gestire i dati provenienti dai form, interagire con i database e produrre contenuti personalizzati per gli utenti. Questo permette di creare soluzioni web complete e funzionali, dal backend al frontend."
  }
];

export default function Testimonials() {
  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Backend e frontend
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ho sviluppato sia in backend che frontend per portare a termine esercizi e piccoli progetti assegnati.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {userTestimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.testimonial}
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  title={testimonial.name}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
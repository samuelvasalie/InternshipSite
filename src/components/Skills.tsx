import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Problem Solving',
    description:
      'Imparato ad analizzare i problemi, eseguire il debug del codice e proporre soluzioni efficaci.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Technical Skills',
    description:
      'Maggiore competenza in HTML, JavaScript, AJAX e PHP. Imparato a creare e gestire database usando MySQL e phpMyAdmin..',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Communication and Teamwork',
    description:
      'Migliorato la mia capacità di comunicare efficacemente e collaborare con colleghi e supervisori, contribuendo agli obiettivi della squadra.',
  },
  {
    icon: <AccessTimeIcon />,
    title: 'Time Management',
    description:
      'Ho imparato a dare priorità alle attività e a gestire il tempo in modo efficace, assicurando che tutti i progetti assegnati fossero completati entro il periodo di tempo stabilito.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Adaptability',
    description:
      "Ho ottenuto la capacità di adattarsi rapidamente a nuovi strumenti, tecnologie e ambienti di lavoro, consentendo un apprendimento efficiente e l'applicazione di nuove competenze in un ambiente professionale.",
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Attention to Detail',
    description:
      'Ho sviluppato un occhio attento ai dettagli, in particolare nel debug del codice e assicurando che tutte le convalide dei moduli e i processi di gestione dei dati fossero implementati con precisione.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4">
            Skills Aquisite
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Durante il mio tirocinio, ho sviluppato diverse abilità chiave:
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Php',
    description:
      "Il codice PHP riceve e gestisce i dati inviati tramite il form. Dopo la validazione, stampa le informazioni dell'utente che ha effettuato l'accesso al form, come nome e cognome.",
    imageLight: 'url("/images/php.png")',
    imageDark: 'url("/images/php.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Javascript',
    description:
      "Il codice JavaScript gestisce la validazione degli input dell'utente sul lato client.Verifica che l'email sia corretta e che il campo 'matricola' contenga solo numeri. Se vengono rilevati errori, vengono mostrati messaggi di avviso appropriati per correggere gli input errati.",
    imageLight: 'url("/images/js.png")',
    imageDark: 'url("/images/js.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Html',
    description:
      "Il codice HTML definisce un form che raccoglie le informazioni dell'utente. Dopo l'invio, se tutti i dati sono corretti, il form viene inviato al server e porta l'utente a una pagina PHP che mostra il nome e il cognome della persona.",
    imageLight: 'url("/images/html.png")',
    imageDark: 'url("/images/html.png")',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Progetti
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
            >
              Questo è un esempio di uno dei compiti assegnati. <br />
              Il compito prevedeva la creazione di un form in <strong>Html </strong>, gestione dei errori e
              indirizzamento alla pagina php in <strong>JavaScript </strong> e stampa di alcuni dei valori
              inseriti dal utente usando <strong>Php</strong>.
            </Typography>
          </div>
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : '';
                    }
                    return selectedItemIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : '';
                    }
                    return selectedItemIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: 'cover',  // or 'contain' based on your need
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: 280,
                '@media (max-width: 600px)': {
                  backgroundSize: 'contain',  // Adjust for phone screen size
                },
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: 'fit-content',
                  width: '100%',
                  background: 'none',
                  backgroundColor:
                    selectedItemIndex === index ? 'action.selected' : undefined,
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index
                        ? 'primary.light'
                        : 'grey.200';
                    }
                    return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                  },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    textAlign: 'left',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'center' },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.main'
                            : 'grey.300';
                        }
                        return selectedItemIndex === index
                          ? 'primary.main'
                          : 'grey.700';
                      },
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: 'none' }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
        >
          <Card
            variant="outlined"
            sx={{
              height: '100%',
              width: '100%',
              display: { xs: 'none', sm: 'flex' },
              pointerEvents: 'none',
            }}
          >
            <Box
              sx={{
                m: 'auto',
                width: 420,
                height: 500,
                backgroundSize: 'contain',  // or 'cover' based on your need
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                '@media (max-width: 600px)': {
                  width: '100%',
                  height: 'auto',
                  backgroundSize: 'contain',  // Adjust for phone screen size
                },
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

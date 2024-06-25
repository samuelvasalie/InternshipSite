import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Introducing&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              myself
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Hi, my name is Samuel Vasalie and I am excited to share with you my experience of PCTO internship. I had the opportunity to spend two weeks at the company Euromedia S.R.L., where I was able to put my skills in web development into practice.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
          </Stack>
        </Stack>
        <Box
          id="image"
          sx={(theme) => ({
            mt: { xs: 8, sm: 10 },
            alignSelf: 'center',
            width: '100%',
            padding: { xs: 2, sm: 4 },
            borderRadius: '10px',
            outline: '1px solid',
            outlineColor:
              theme.palette.mode === 'light'
                ? alpha('#BFCCD9', 0.5)
                : alpha('#9CCCFC', 0.1),
            boxShadow:
              theme.palette.mode === 'light'
                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1e1e1e',
          })}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: 'center',
              fontSize: 'clamp(2rem, 5vw, 1rem)',
              color: 'text.primary',
            }}
          >
            Experience Report: PCTO Internship
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
              margin: '0 auto',
            }}
          >
            <br />
            <br />
            Introduction:
            During the academic year [Year], I undertook a PCTO (Periodo di Consolidamento delle Competenze) internship at Euromedia S.R.L, located at Via Vittorio Alfieri 3, Terni. The internship lasted for two weeks and was an essential part of my educational curriculum.
            <br />
            <br />
            Objectives:
            The primary objective of this internship was to gain practical experience in web development, further develop my professional skills, and apply theoretical knowledge learned in the classroom to real-world scenarios. Additionally, I aimed to understand the dynamics of a professional work environment and improve my teamwork and communication skills.
            <br />
            <br />
            Tasks and Responsibilities:
            Throughout the internship, I was involved in various tasks. In the first week, I learned AJAX and JavaScript, understanding how AJAX allows updating a web page without reloading it. I added a field to track user courses and time spent on each course using an array. I also studied client-side and server-side languages, focusing on JavaScript, and covered chapters 1 to 8 of an HTML guide. In the second week, I continued reading the JavaScript guide up to chapter 18 and chapter 77, then proceeded to read chapters 78 to 81. I started and completed Exercise 1, which involved creating an HTML form with various input fields and adding a JavaScript function for validation. I re-did the exercise using different methods such as alert(), addEventListener, and innerHTML to display data. I also sent data to a PHP page using the $_POST['variableName'] method and loaded data into a MySQL database using phpMyAdmin and XAMPP after creating the database with SQL.
            <br />
            <br />
            Skills Acquired:
            During my internship, I developed several key skills, including enhanced proficiency in HTML, JavaScript, AJAX, and PHP. I learned to create and manage databases using MySQL and phpMyAdmin. Additionally, I improved my ability to effectively communicate with colleagues and supervisors, analyze problems, debug code, propose effective solutions, and collaborate with colleagues to contribute to team goals.
            <br />
            <br />
            Challenges Faced:
            One of the main challenges I encountered was adapting to new web development tools and techniques, such as AJAX and database management. However, through perseverance and guidance from my mentor, I was able to overcome these challenges and achieve successful outcomes.
            <br />
            <br />
            Achievements:
            I successfully created functional web forms with comprehensive validation, integrated them with PHP for backend processing, and managed data storage in a MySQL database. These achievements demonstrated my capabilities and added value to the organization.
            <br />
            <br />
            Conclusion:
            In conclusion, my PCTO internship at Euromedia S.R.L was an invaluable experience that significantly contributed to my personal and professional development. It provided me with practical insights into web development, enhanced my skills, and confirmed my career aspirations in this field. I am grateful for the opportunity and look forward to applying what I have learned in future endeavors.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

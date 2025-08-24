import { colors } from "@/app/Styles/colors";
import { sections } from "@/app/Utils/data/section";
import { Box, Container, Link, Typography, List, ListItem, } from "@mui/material";
import Grid from "@mui/material/Grid";
import BackgroundImagine from "./bgImage";
import PromoSection from "@/app/Shared/PromoSection";

export default function Kataloq() {

  return (
    <>

      <Box sx={{
        py: { xs: 0, md: 5 }, bgcolor: colors.black, position: 'relative',
        zIndex: 0, overflow: { xs: 'visible', md: 'hidden' }
      }}>
        <Box sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center', mb: 10
        }}>
          <Box sx={{
            position: 'relative', zIndex: 5, textAlign: 'center',
            maxWidth: 220,
          }}><PromoSection /></Box></Box>
        <Container >
          <Box sx={{ pb: 12 }}>
            <Typography variant="h2">каталог</Typography>
            <Grid container spacing={{ xs: 4, md: 3 }} sx={{ flexGrow: 1, mt: 2 }}>
              <Grid size={{ md: 12, lg: 6 }}
                sx={{ display: { xs: 'none', lg: 'block' } }}
                offset={{ md: 1 }}>
                <Typography variant="subtitle2"  >
                  У нас самый большой выбор цветов, букетов, открыток и подарков.
                  {'\n'}
                  Мы всегда поможем вам подобрать букет для вашего события, наш
                </Typography>
                <Typography variant="subtitle2" sx={{ letterSpacing: "0.3px" }}>
                  менеджер вас проконсультирует и поможет определиться с выбором
                  {'\n'} {'\n'}
                </Typography>

                <Typography variant="subtitle2">
                  Ознакомьтесь с нашими разделами каталога
                </Typography>
              </Grid>
              {sections.map((section, index) => (
                <Grid key={index} size={section.grid} sx={section.sx}>
                  <Box
                    sx={{
                      textAlign: { xs: 'center', md: 'left' },
                      position: 'relative',
                      zIndex: 1,
                      mt: { xs: 1, md: 0 },
                      backdropFilter: 'blur(5px)',
                      bgcolor: colors.transparentBlack,
                      borderRadius: 3,
                      p: { xs: 2, md: '30px 30px 30px 50px' },
                      maxWidth: index === 0 ? 445 : 540,
                      height: '100%',
                      minheight: index === 0 ? 281 : index === 1 ? 310 : index === 2 ? 264 : '',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ my: 1, whiteSpace: 'pre-line' }}
                    > {section.title}
                    </Typography>
                    <List dense >
                      {section.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex}>{item}</ListItem>
                      ))}
                    </List>
                    <Box sx={{ textAlign: { xs: 'center', md: 'right' }, }}>
                      <Typography
                        variant="subtitle9"
                        href={section.href}
                        component={Link}
                      >
                        Смотреть каталог
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container >
        <BackgroundImagine />

      </Box >
    </>
  );
}
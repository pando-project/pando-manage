/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Divider } from "@mui/material";
import { Box } from "@mui/system";

import dayjs from "dayjs";

// import { getProvidersOrProvider } from "apis/providers";
const Provider = ({ onClose, id, providerDetail }) => {
  // useEffect(() => {
  //   getProvidersOrProvider().then((res) => {
  //     const provider = res.data?.Data?.registeredProviders;
  //     setProvider(provider);
  //   });
  // }, []);

  return (
    <>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="p">
            Provider:Dealbot
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        style={{
          height: "100%",
          flexWrap: "nowrap",
        }}
      >
        <Grid item xs={4} height="100%">
          <Box
            style={{
              height: "100%",
              padding: 24,
            }}
          >
            <Typography gutterBottom variant="h6" component="p">
              Peer ID
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                wordBreak: "break-word",
              }}
            >
              {providerDetail?.AddrInfo?.ID}
            </Typography>
            <Divider></Divider>

            <Typography gutterBottom variant="h6" component="p">
              Multi Address
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                wordBreak: "break-word",
              }}
            >
              {/* /ip4/136.144.57.12/tcp/4001 */}
              {providerDetail?.AddrInfo?.Addrs.map((addr) => {
                return (
                  <>
                    {addr} <br />
                  </>
                );
              })}
            </Typography>
            <Divider></Divider>

            <Typography gutterBottom variant="h6" component="p">
              Last Sync At
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                wordBreak: "break-word",
              }}
            >
              {providerDetail?.LastContactTime
                ? dayjs(providerDetail?.LastContactTime).format(
                    "YYYY-MM-DD HH:mm:ss"
                  )
                : "-"}
            </Typography>

            <Divider></Divider>
            <Typography gutterBottom variant="h6" component="p">
              Data Head CID
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{
                wordBreak: "break-word",
              }}
            >
              {providerDetail?.LatestMeta?.["/"]}
            </Typography>
          </Box>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid
          item
          xs={8}
          style={{
            opacity: 0.3,
          }}
        >
          <Box
            style={{
              padding: 24,
            }}
          >
            <Box sx={{ width: "100%" }}>
              <iframe
                src={`https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&from=1663392135024&to=1663413735024&panelId=14&peerID=${providerDetail?.AddrInfo?.ID}`}
                width="450"
                height="200"
                frameborder="0"
              ></iframe>

              <iframe
                src={`https://grafana.kencloud.com/d-solo/HHeNiW7Vk/pando?orgId=1&refresh=5s&from=1663392228363&to=1663413828363&panelId=12&peerID=${providerDetail?.AddrInfo?.ID}`}
                width="450"
                height="200"
                frameborder="0"
                style={{ marginLeft: 10 }}
              ></iframe>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Provider;

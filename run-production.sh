#!/bin/bash

pm2 startup
pm2 start ecosystem.config.js  --env production
pm2 save
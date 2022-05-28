-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: roadtripping
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito de compras`
--
CREATE DATABASE roadtripping;
USE roadtripping;

DROP TABLE IF EXISTS `carrito de compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito de compras` (
  `ID (PK)` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id (FK)` int(11) NOT NULL,
  `producto_id (FK)` int(11) NOT NULL,
  `precio` int(11) NOT NULL,
  PRIMARY KEY (`ID (PK)`),
  KEY `usuario_id (FK)` (`usuario_id (FK)`),
  KEY `producto_id (FK)` (`producto_id (FK)`),
  CONSTRAINT `carrito de compras_ibfk_1` FOREIGN KEY (`usuario_id (FK)`) REFERENCES `usuarios` (`ID`),
  CONSTRAINT `carrito de compras_ibfk_2` FOREIGN KEY (`producto_id (FK)`) REFERENCES `productos` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito de compras`
--

LOCK TABLES `carrito de compras` WRITE;
/*!40000 ALTER TABLE `carrito de compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito de compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comprados`
--

DROP TABLE IF EXISTS `comprados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comprados` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id (FK)` int(11) NOT NULL,
  `producto_id (FK)` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `usuario_id (FK)` (`usuario_id (FK)`),
  KEY `producto_id (FK)` (`producto_id (FK)`),
  CONSTRAINT `comprados_ibfk_1` FOREIGN KEY (`usuario_id (FK)`) REFERENCES `usuarios` (`ID`),
  CONSTRAINT `comprados_ibfk_2` FOREIGN KEY (`producto_id (FK)`) REFERENCES `productos` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comprados`
--

LOCK TABLES `comprados` WRITE;
/*!40000 ALTER TABLE `comprados` DISABLE KEYS */;
INSERT INTO `comprados` VALUES (1,1,4),(2,2,2),(3,3,1),(4,4,4),(5,5,3),(6,6,5),(7,7,5),(8,8,5),(9,9,2),(10,10,4),(11,11,1),(12,12,2),(13,13,4),(14,14,2),(15,15,4),(16,16,5),(17,17,1),(18,18,4),(19,19,5),(20,20,1),(21,21,2),(22,22,3),(23,23,4),(24,24,2),(25,25,4),(26,26,2),(27,27,1),(28,28,5),(29,29,2),(30,30,5),(31,31,5),(32,32,3),(33,33,3),(34,34,1),(35,35,3),(36,36,2),(37,37,5),(38,38,2),(39,39,2),(40,40,4),(41,41,1),(42,42,5),(43,43,5),(44,44,5),(45,45,1),(46,46,3),(47,47,3),(48,48,4),(49,49,5),(50,50,3);
/*!40000 ALTER TABLE `comprados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favoritos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `usuario_id` (`usuario_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`ID`),
  CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
INSERT INTO `favoritos` VALUES (1,1,5),(2,2,4),(3,3,2),(4,4,2),(5,5,4),(6,6,1),(7,7,4),(8,8,4),(9,9,4),(10,10,3),(11,11,4),(12,12,4),(13,13,5),(14,14,3),(15,15,4),(16,16,5),(17,17,3),(18,18,3),(19,19,5),(20,20,4),(21,21,3),(22,22,3),(23,23,1),(24,24,2),(25,25,5),(26,26,1),(27,27,1),(28,28,3),(29,29,5),(30,30,3),(31,31,3),(32,32,5),(33,33,3),(34,34,3),(35,35,3),(36,36,1),(37,37,4),(38,38,5),(39,39,2),(40,40,4),(41,41,3),(42,42,2),(43,43,1),(44,44,2),(45,45,1),(46,46,3),(47,47,1),(48,48,2),(49,49,2),(50,50,5);
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `ID` int(11) NOT NULL,
  `titulo` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `destino` varchar(200) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `categoria` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `detalle` varchar(300) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'producto 1','Jujuy','Actividades',8675,'disponible en abril 2022'),(2,'producto 2','calafate','escapadas',1046,'disponible en junio 2022'),(3,'producto 3','Mendoza','Actividades',114,'disponible en Octubre 2022'),(4,'producto 4','Bariloche','Destacado',1428,'disponible en junio 2022'),(5,'producto 5','calafate','Actividades',5972,'disponible en Febrero 2023'),(6,'producto 6','Ushuaia','Actividades',466,'disponible en Diciembre 2022'),(7,'producto 7','Jujuy','escapadas',5757,'disponible en Octubre 2022'),(8,'producto 8','Mendoza','Oferta',2467,'disponible en Julio 2022'),(9,'producto 9','Ushuaia','Actividades',4245,'disponible en Noviembre 2022'),(10,'producto 10','Jujuy','Destacado',1916,'disponible en Enero 2023');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `apellido` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `usuario` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `Contraseña` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Genero` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Admin` tinyint(1) NOT NULL,
  `Avatar` varbinary(100) NOT NULL,
  `Ubicacion` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Lengua` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Moneda` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Breeze','Egbert','ebreeze0@goodreads.com','r44iK0FnL','Male',1,'imagen','Indonesia','Czech','IDR'),(2,'Elwyn','Varnals','evarnals1@1und1.de','EBPh4kXokUb','Female',1,'imagen','Russia','Assamese','RUB'),(3,'Wayland','Courtier','wcourtier2@amazon.com','NQScWbR12M1','Female',1,'imagen','Pakistan','Hiri Motu','PKR'),(4,'Arliene','Hubery','ahubery3@taobao.com','ekJFE17T3','Female',0,'imagen','Philippines','Oriya','PHP'),(5,'Carey','McCormick','cmccormick4@delicious.com','R4X0Zc','Polygender',0,'imagen','Yemen','Amharic','YER'),(6,'Paxton','Gogerty','pgogerty5@feedburner.com','FsOgpn','Female',1,'imagen','Estonia','Bislama','EUR'),(7,'Samaria','Polly','spolly6@bloglovin.com','lVzZ1lzUlH4','Genderqueer',0,'imagen','China','Portuguese','CNY'),(8,'Hallie','Bootes','hbootes7@latimes.com','ltbLsiz','Male',0,'imagen','Indonesia','Kyrgyz','IDR'),(9,'Sunny','Francesconi','sfrancesconi8@de.vu','oCumWzaw5','Female',0,'imagen','China','Bosnian','CNY'),(10,'Shannan','Spurman','sspurman9@house.gov','xtAbFcx','Agender',1,'imagen','Honduras','Fijian','CNY'),(11,'Ernesto','Chaffyn','echaffyna@amazon.com','oapitopJ','Male',1,'imagen','Mongolia','Kurdish','MNT'),(12,'Neala','Diego','ndiegob@intel.com','fvaWvL23J','Male',1,'imagen','Portugal','Hiri Motu','EUR'),(13,'Blayne','Jumonet','bjumonetc@time.com','uPu3jdpHwf4T','Male',0,'imagen','Peru','Indonesian','PEN'),(14,'Nevin','Reach','nreachd@dailymotion.com','brFDHUvX24xc','Female',1,'imagen','China','Lithuanian','CNY'),(15,'Esta','Dalmon','edalmone@ftc.gov','QQSBOag','Female',1,'imagen','Macedonia','Kazakh','MKD'),(16,'Elianora','Veltman','eveltmanf@google.com.hk','G8lQeysRWWd','Male',0,'imagen','France','Dutch','EUR'),(17,'Lenee','Bewsey','lbewseyg@indiegogo.com','LSRvabfjlzw','Female',0,'imagen','Argentina','Portuguese','ARS'),(18,'Nisse','Clench','nclenchh@nih.gov','Pa2QJ9A52C','Male',0,'imagen','Brazil','Haitian Creole','BRL'),(19,'Audrye','Wollers','awollersi@blogspot.com','vtBdyvNfOilR','Female',1,'imagen','Peru','Bulgarian','PEN'),(20,'Morna','Erswell','merswellj@eventbrite.com','yUUy87T','Male',0,'imagen','Poland','Polish','PLN'),(21,'Paule','Atcherley','patcherleyk@yelp.com','3CjDADQRMwuh','Female',1,'imagen','Sweden','Afrikaans','SEK'),(22,'Giff','Weaben','gweabenl@webs.com','fpRK3pTXjcR','Male',0,'imagen','Portugal','Pashto','EUR'),(23,'Rodolphe','Webb-Bowen','rwebbbowenm@moonfruit.com','3ULu3qFZeE9','Female',0,'imagen','Russia','Croatian','RUB'),(24,'Claudina','Wooding','cwoodingn@columbia.edu','13HS6U','Male',1,'imagen','Canada','Sotho','CAD'),(25,'Artur','Farland','afarlando@elegantthemes.com','5d68Ej1yH','Female',1,'imagen','Russia','Italian','RUB'),(26,'Wini','Fusedale','wfusedalep@ustream.tv','TBt0H27kh7Xf','Female',1,'imagen','France','Pashto','EUR'),(27,'Shellysheldon','McConaghy','smcconaghyq@businesswire.com','jLuyDXgDOrT3','Female',0,'imagen','Russia','Tok Pisin','RUB'),(28,'Mirna','Dagger','mdaggerr@newsvine.com','o8ILtpe','Male',1,'imagen','Brazil','Kyrgyz','BRL'),(29,'Eldredge','Twitchett','etwitchetts@elegantthemes.com','nfu2gtF67lEb','Female',1,'imagen','Russia','Lao','RUB'),(30,'Brier','Canas','bcanast@zdnet.com','JpMPp4PrREF','Male',1,'imagen','Philippines','Portuguese','PHP'),(31,'Madison','Lauret','mlauretu@foxnews.com','vX26po','Male',0,'imagen','Indonesia','Armenian','IDR'),(32,'Erhart','Letteresse','eletteressev@dell.com','yx6yaYWtGxZ','Male',1,'imagen','Netherlands','Kazakh','EUR'),(33,'Nickolaus','Cubley','ncubleyw@discovery.com','H7XLMD','Male',1,'imagen','Portugal','Estonian','EUR'),(34,'Alma','Tarver','atarverx@sina.com.cn','22AkD6','Male',1,'imagen','China','Italian','CNY'),(35,'Aleta','McTurk','amcturky@tiny.cc','ZCdmEew','Male',0,'imagen','Japan','Azeri','JPY'),(36,'Vida','Breese','vbreesez@npr.org','dKJX1nm','Genderfluid',1,'imagen','Mexico','Tajik','MXN'),(37,'Teddi','Wallsworth','twallsworth10@acquirethisname.com','1vp8wphQN0','Genderfluid',1,'imagen','Comoros','Māori','KMF'),(38,'Brittni','Padly','bpadly11@quantcast.com','sQICAhA','Male',0,'imagen','Greece','Telugu','EUR'),(39,'Bogey','Eirwin','beirwin12@ameblo.jp','YeXxTgN3','Male',1,'imagen','China','Kurdish','CNY'),(40,'Gwen','Francescoccio','gfrancescoccio13@ocn.ne.jp','H2lhkYt','Male',0,'imagen','Indonesia','Hungarian','IDR'),(41,'Rozele','Andreia','randreia14@wikimedia.org','dDnUsDbP','Male',0,'imagen','Ukraine','Sotho','UAH'),(42,'Law','Causley','lcausley15@ycombinator.com','P3YZG6emCvO','Female',0,'imagen','Indonesia','Mongolian','IDR'),(43,'Freida','Tetla','ftetla16@spotify.com','zDQz3ID1D','Genderfluid',0,'imagen','Indonesia','Haitian Creole','IDR'),(44,'Del','Roubeix','droubeix17@furl.net','gKtjG6tLCm','Male',1,'imagen','Poland','German','PLN'),(45,'Nicola','Fenn','nfenn18@cloudflare.com','nU2EDEX4T7LX','Female',0,'imagen','China','Dutch','CNY'),(46,'Caresa','Forkan','cforkan19@columbia.edu','zdHAqKx','Female',1,'imagen','United States','Bosnian','USD'),(47,'Boris','Potkins','bpotkins1a@sourceforge.net','ZIBc6siTdzss','Genderqueer',1,'imagen','Thailand','Japanese','THB'),(48,'Kingsly','Curedell','kcuredell1b@51.la','JqPhrLhod','Female',0,'imagen','Argentina','Finnish','ARS'),(49,'Alene','Wontner','awontner1c@forbes.com','TXKKnvWBqUfa','Female',1,'imagen','China','Kurdish','CNY'),(50,'Byrom','Droogan','bdroogan1d@wunderground.com','2Y2bVEt2Gyw','Male',0,'imagen','Tunisia','Albanian','TND');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vistos`
--

DROP TABLE IF EXISTS `vistos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vistos` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id (FK)` int(11) NOT NULL,
  `producto_id (FK)` int(11) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `usuario_id (FK)` (`usuario_id (FK)`),
  KEY `producto_id (FK)` (`producto_id (FK)`),
  CONSTRAINT `vistos_ibfk_1` FOREIGN KEY (`usuario_id (FK)`) REFERENCES `usuarios` (`ID`),
  CONSTRAINT `vistos_ibfk_2` FOREIGN KEY (`producto_id (FK)`) REFERENCES `productos` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vistos`
--

LOCK TABLES `vistos` WRITE;
/*!40000 ALTER TABLE `vistos` DISABLE KEYS */;
INSERT INTO `vistos` VALUES (1,1,4),(2,2,5),(3,3,5),(4,4,1),(5,5,1),(6,6,5),(7,7,3),(8,8,2),(9,9,5),(10,10,5),(11,11,2),(12,12,5),(13,13,3),(14,14,5),(15,15,4),(16,16,3),(17,17,4),(18,18,1),(19,19,3),(20,20,1),(21,21,5),(22,22,4),(23,23,5),(24,24,3),(25,25,4),(26,26,1),(27,27,2),(28,28,1),(29,29,1),(30,30,2),(31,31,2),(32,32,5),(33,33,5),(34,34,2),(35,35,3),(36,36,4),(37,37,4),(38,38,5),(39,39,1),(40,40,4),(41,41,3),(42,42,4),(43,43,1),(44,44,4),(45,45,1),(46,46,4),(47,47,3),(48,48,4),(49,49,1),(50,50,1);
/*!40000 ALTER TABLE `vistos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19 22:11:30

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-07-2023 a las 10:10:52
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database_app`
--

-- --------------------------------------------------------

--
-- Estructura Stand-in para la vista `all_data`
-- (Véase abajo para la vista actual)
--
CREATE TABLE `all_data` (
);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccions`
--

CREATE TABLE `direccions` (
  `id` int(11) NOT NULL,
  `Calle` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `N_Int` int(10) DEFAULT NULL,
  `N_Ext` int(10) DEFAULT NULL,
  `Colonia` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `Municipio` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `Estado` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `direccions`
--

INSERT INTO `direccions` (`id`, `Calle`, `N_Int`, `N_Ext`, `Colonia`, `Municipio`, `Estado`) VALUES
(1, 'fdfds', 11, 12, 'dsfs', 'sdfs', 'sdf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generales`
--

CREATE TABLE `generales` (
  `id` int(100) NOT NULL,
  `Nombre` varchar(250) NOT NULL,
  `Ap_Paterno` varchar(200) NOT NULL,
  `Ap_Materno` varchar(200) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Sexo` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `generales`
--

INSERT INTO `generales` (`id`, `Nombre`, `Ap_Paterno`, `Ap_Materno`, `Edad`, `Sexo`) VALUES
(1, 'Ricardo', 'Gonzalez', 'Mendez', 23, 'Masculino'),
(2, 'Juan', 'perez', 'Mendez', 26, 'Masculino'),
(13, 'Maria', 'Garcilita', '', 0, ''),
(16, 'Misael', 'Guido', 'Lopez', 23, 'Hombre'),
(17, 'Maria', 'Guido', 'Lopez', 25, 'Hombre'),
(18, 'Maria', 'sda', 'Lopez', 25, 'Mujer'),
(19, 'patitojuan', 'Guido', 'Lopez', 23, 'Hombre');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `particulares`
--

CREATE TABLE `particulares` (
  `id` int(11) NOT NULL,
  `I_pers` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `D_Pref` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `T_Hab` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `I_Mens` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `V_año` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `particulares`
--

INSERT INTO `particulares` (`id`, `I_pers`, `D_Pref`, `T_Hab`, `I_Mens`, `V_año`) VALUES
(1, 'Musica', 'Playa', 'Departament', '5000-7000', '1 - 3');

-- --------------------------------------------------------

--
-- Estructura para la vista `all_data`
--
DROP TABLE IF EXISTS `all_data`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `all_data`  AS SELECT `g`.`id` AS `id`, `g`.`Nombre` AS `Nombre`, `g`.`Ap_Paterno` AS `Ap_Paterno`, `g`.`Ap_Materno` AS `Ap_Materno`, `g`.`Edad` AS `Edad`, `g`.`Sexo` AS `Sexo`, `d`.`Calle` AS `Calle`, `d`.`N_Int` AS `N_Int`, `d`.`N_Ext` AS `N_Ext`, `d`.`Colonia` AS `Colonia`, `d`.`Municipio` AS `Municipio`, `d`.`Estado` AS `Estado`, `p`.`I_pers` AS `I_pers`, `p`.`D_Pref` AS `D_Pref`, `p`.`T_Hab` AS `T_Hab`, `p`.`I_Mens` AS `I_Mens`, `p`.`V_año` AS `V_año` FROM ((`generales` `g` join `direccion` `d` on(`g`.`id` = `d`.`id`)) join `particulares` `p` on(`g`.`id` = `p`.`id`)) ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `direccions`
--
ALTER TABLE `direccions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `generales`
--
ALTER TABLE `generales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `particulares`
--
ALTER TABLE `particulares`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `direccions`
--
ALTER TABLE `direccions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `generales`
--
ALTER TABLE `generales`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `particulares`
--
ALTER TABLE `particulares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

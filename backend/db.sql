CREATE TABLE `mydatabase`.`company` (
  `Company_No` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(18) NOT NULL,
  `Phone` VARCHAR(12) NULL,
  PRIMARY KEY (`Company_No`),
  UNIQUE INDEX `Company_No_UNIQUE` (`Company_No` ASC) VISIBLE);
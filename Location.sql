USE [MYsecondDB]
GO

/****** Object:  Table [dbo].[Location]    Script Date: 11/4/2017 3:28:38 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[Location](
	[latitude] [float] NOT NULL,
	[longitude] [float] NOT NULL,
	[brand] [varchar](50) NOT NULL,
	[location] [varchar](50) NOT NULL,
	[lid] [int] IDENTITY(1,1) NOT NULL,
	[laddress] [varchar](300) NULL,
	[descriptions] [varchar](max) NULL,
	[btitle] [varchar](100) NULL,
	[blink] [varchar](100) NULL,
PRIMARY KEY CLUSTERED 
(
	[lid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

